// Copyright 2018, University of Colorado Boulder

/**
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var diagramDemo = require( 'DIAGRAM_DEMO/diagramDemo' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Particle = require( 'DIAGRAM_DEMO/diagram-demo/model/Particle' );

  /**
   * @constructor
   */
  function DiagramDemoModel() {
    this.particle = new Particle(); // @public
  }

  diagramDemo.register( 'DiagramDemoModel', DiagramDemoModel );

  return inherit( Object, DiagramDemoModel, {

    // @public
    reset: function() {
      this.particle.reset();
    },

    // @public animate the particle
    step: function( dt ) {
      this.particle.step( dt );
    }
  } );
} );