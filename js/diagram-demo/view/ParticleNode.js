// Copyright 2016-2017, University of Colorado Boulder

/**
 * Particle view.
 *
 * @author Sam Reid
 */
define( function( require ) {
  'use strict';

  // modules
  var diagramDemo = require( 'DIAGRAM_DEMO/diagramDemo' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );

  // constants
  var PARTICLE_SIZE = 10;

  /**
   * @param {Particle} particle
   * @param {String|color} color
   * @constructor
   */
  function ParticleNode( particle, color ) {

    Rectangle.call( this, -PARTICLE_SIZE / 2, 0, PARTICLE_SIZE, PARTICLE_SIZE, {
      x: particle.positionProperty.x,
      y: particle.positionProperty.y,
      fill: color
    } );

    var self = this;
    particle.positionProperty.link( function( position ) {
      self.x = position.x;
      self.y = position.y;
    } );
  }

  diagramDemo.register( 'ParticleNode', ParticleNode );

  return inherit( Rectangle, ParticleNode );
} );