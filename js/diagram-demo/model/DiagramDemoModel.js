// Copyright 2018, University of Colorado Boulder

/**
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var diagramDemo = require( 'DIAGRAM_DEMO/diagramDemo' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @constructor
   */
  function DiagramDemoModel() {
  }

  diagramDemo.register( 'DiagramDemoModel', DiagramDemoModel );

  return inherit( Object, DiagramDemoModel );
} );