// Copyright 2018, University of Colorado Boulder

/**
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var diagramDemo = require( 'DIAGRAM_DEMO/diagramDemo' );

  /**
   * @constructor
   */
  function DiagramDemoModel() {
    //TODO
  }

  diagramDemo.register( 'DiagramDemoModel', DiagramDemoModel );

  return inherit( Object, DiagramDemoModel, {

    // @public resets the model
    reset: function() {
      //TODO reset things here
    },

    //TODO Called by the animation loop. Optional, so if your model has no animation, please delete this.
    // @public
    step: function( dt ) {
      //TODO Handle model animation here.
    }
  } );
} );