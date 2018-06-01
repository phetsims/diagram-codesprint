// Copyright 2018, University of Colorado Boulder

/**
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );
  var diagramDemo = require( 'DIAGRAM_DEMO/diagramDemo' );
  var DiagramDemoModel = require( 'DIAGRAM_DEMO/diagram-demo/model/DiagramDemoModel' );
  var DiagramDemoScreenView = require( 'DIAGRAM_DEMO/diagram-demo/view/DiagramDemoScreenView' );

  /**
   * @constructor
   */
  function DiagramDemoScreen() {

    var options = {
      backgroundColorProperty: new Property( 'white' )
    };

    Screen.call( this,
      function() { return new DiagramDemoModel(); },
      function( model ) { return new DiagramDemoScreenView( model ); },
      options
    );
  }

  diagramDemo.register( 'DiagramDemoScreen', DiagramDemoScreen );

  return inherit( Screen, DiagramDemoScreen );
} );