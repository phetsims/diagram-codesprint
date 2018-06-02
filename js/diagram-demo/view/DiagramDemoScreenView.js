// Copyright 2018, University of Colorado Boulder

/**
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var diagramDemo = require( 'DIAGRAM_DEMO/diagramDemo' );
  var DraggableNode = require( 'DIAGRAM_DEMO/diagram-demo/view/DraggableNode' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var Vector2 = require( 'DOT/Vector2' );

  // constants
  var INITIAL_POSITION = new Vector2( 50, 500 );

  /**
   * @param {DiagramDemoModel} model
   * @constructor
   */
  function DiagramDemoScreenView( model ) {
    var self = this;
    ScreenView.call( this );

    // Reset All button
    var resetAllButton = new ResetAllButton( {
      listener: function() {
        self.draggableNode.center = INITIAL_POSITION;
      },
      right: this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10
    } );
    this.addChild( resetAllButton );

    console.log( this.bounds );


    this.draggableNode = new DraggableNode( {
      fill: 'blue',
      center: INITIAL_POSITION

    } );
    this.addChild( this.draggableNode );

  }

  diagramDemo.register( 'DiagramDemoScreenView', DiagramDemoScreenView );

  return inherit( ScreenView, DiagramDemoScreenView, {
    step: function( dt ) {
      this.draggableNode.step( dt );
    }
  } );
} );