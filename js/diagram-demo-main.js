// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var DiagramDemoScreen = require( 'DIAGRAM_DEMO/diagram-demo/DiagramDemoScreen' );

  // strings
  var diagramDemoTitleString = require( 'string!DIAGRAM_DEMO/diagram-demo.title' );

  var simOptions = {
    credits: {
      //TODO fill in proper credits, all of these fields are optional, see joist.AboutDialog
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      thanks: ''
    }
  };

  SimLauncher.launch( function() {
    var sim = new Sim( diagramDemoTitleString, [ new DiagramDemoScreen() ], simOptions );
    sim.start();
  } );
} );