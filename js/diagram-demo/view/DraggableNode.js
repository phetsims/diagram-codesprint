// Copyright 2018, University of Colorado Boulder

/**
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var Animation = require( 'TWIXT/Animation' );
  var diagramDemo = require( 'DIAGRAM_DEMO/diagramDemo' );
  var inherit = require( 'PHET_CORE/inherit' );
  var NumberProperty = require( 'AXON/NumberProperty' );
  var PressListener = require( 'SCENERY/listeners/PressListener' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );

  // constants
  var PARTICLE_SIZE = 20;

  /**
   * A node that can be dragged first, and then on release will follow the path of the pointer's drag.
   * @param {Object} [options]
   * @constructor
   */
  function DraggableNode( options ) {
    var self = this;
    options = _.extend( {
      fill: 'black',
      cursor: 'pointer'

    }, options );
    Rectangle.call( this, -PARTICLE_SIZE / 2, 0, PARTICLE_SIZE, PARTICLE_SIZE, options );

    var recording = false;

    var path = [];

    // this is stepped in the animation
    var indexProperty = new NumberProperty( 0 );


    indexProperty.link( function( steppedIndex ) {

      var index = Math.floor( steppedIndex );

      if ( index >= 0 && index < path.length ) {
        self.center = path[ index ];
      }
    } );

    this.animation = null;

    // Add a listener to record the pointer events from the mouse (or whatever)
    this.addInputListener( new PressListener( {
      press: function( event ) {
        recording = true;
        console.log( event.pointer.point );
        self.center = self.globalToParentPoint( event.pointer.point );
      },
      drag: function( event ) {
        if ( recording ) {
          path.push( self.globalToParentPoint( event.pointer.point ) );
        }
      },
      release: function() {
        console.log( path );
        self.animation = new Animation( {
          property: indexProperty,
          to: path.length - 1,
          duration: 5
        } );
        self.animation.start();
        self.animation.endedEmitter.addListener( function() {
          console.log( 'finished animation' );
          path = [];
          indexProperty.reset();

        } );

        recording = false;
      }
    } ) );

  }

  diagramDemo.register( 'DraggableNode', DraggableNode );

  return inherit( Rectangle, DraggableNode, {
    step: function( dt ) {
      this.animation && this.animation.step( dt );
    }
  } );
} );