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
  var NumberProperty = require( 'AXON/NumberProperty' );

  /**
   * @constructor
   */
  function Particle( ) {

    // @public
    this.xProperty = new NumberProperty( 50 );
    this.velocityProperty = new NumberProperty( 5 );

    // @public (read-only) y is constant
    this.y = 50;
  }

  diagramDemo.register( 'Particle', Particle );

  return inherit( Object, Particle, {

    // @public
    reset: function() {
      this.xProperty.reset();
      this.velocityProperty.reset();
    },

    // @public animate particle, changing direction at min/max x
    step: function( dt ) {
      this.xProperty.value = this.xProperty.value + this.velocityProperty.value;
      if ( this.xProperty.value > 1024 ) {
        this.velocityProperty.value = -Math.abs( this.velocityProperty.value );
      }
      else if ( this.xProperty.value < 0 ) {
        this.velocityProperty.value = +Math.abs( this.velocityProperty.value );
      }
    }
  } );
} );