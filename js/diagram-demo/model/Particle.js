// Copyright 2013-2017, University of Colorado Boulder

/**
 * Particle model.
 *
 * @author Sam Reid
 */
define( function( require ) {
  'use strict';

  // modules
  var diagramDemo = require( 'DIAGRAM_DEMO/diagramDemo' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @constructor
   */
  function Particle() {

    // @public
    this.positionProperty = new Property( new Vector2( 50, 50 ) );
    this.velocityProperty = new Property( new Vector2( 5, 1 ) );
  }

  diagramDemo.register( 'Particle', Particle );

  return inherit( Object, Particle, {

    // @public
    reset: function() {
      this.positionProperty.reset();
      this.velocityProperty.reset();
    },

    // @public animate particle, changing direction at min/max x
    step: function( dt ) {

      this.positionProperty.value = this.positionProperty.value.plus( this.velocityProperty.value );

      // update x velocity
      if ( this.positionProperty.value.x.value > 1024 ) {
        this.velocityProperty.value.x= -Math.abs( this.velocityProperty.value.x);
      }
      else if ( this.positionProperty.value.x< 0 ) {
        this.velocityProperty.value.x= +Math.abs( this.velocityProperty.value.x);
      }

      // update y velocity
      if ( this.positionProperty.value.y> 1024 ) {
        this.velocityProperty.value.y= -Math.abs( this.velocityProperty.value.y);
      }
      else if ( this.positionProperty.value.y< 0 ) {
        this.velocityProperty.value.y= +Math.abs( this.velocityProperty.value.y);
      }

    }
  } );
} );