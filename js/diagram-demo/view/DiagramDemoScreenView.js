// Copyright 2018, University of Colorado Boulder

/**
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var diagramDemo = require( 'DIAGRAM_DEMO/diagramDemo' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ParticleNode = require( 'DIAGRAM_DEMO/diagram-demo/view/ParticleNode' );
  var ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  var ScreenView = require( 'JOIST/ScreenView' );

  /**
   * @param {DiagramDemoModel} model
   * @constructor
   */
  function DiagramDemoScreenView( model ) {

    ScreenView.call( this );

    this.addChild( new ParticleNode( model.particle, 'black' ) );

    // Reset All button
    var resetAllButton = new ResetAllButton( {
      listener: function() {
        model.reset();
      },
      right:  this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10
    } );
    this.addChild( resetAllButton );
  }

  diagramDemo.register( 'DiagramDemoScreenView', DiagramDemoScreenView );

  return inherit( ScreenView, DiagramDemoScreenView );
} );