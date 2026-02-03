// Array2D.d.ts



/**
 * Array2D provides a suite of functions for working with 2D arrays (grids).
 */
declare function Array2D(): Array2D;

declare namespace Array2D {
  /** The current version of the library. */
  const VERSION: string;

  /**
   * Restores the original value of the global `Array2D` variable.
   * @returns A reference to the Array2D object.
   */
  function noConflict(): typeof Array2D;

  // Enums
  // ========================================================

  enum AXIS { X = 1, Y = 2 }
  enum BEARINGS { NORTH = 1, NORTHWEST = 2, NORTHEAST = 3, SOUTH = 4, SOUTHWEST = 5, SOUTHEAST = 6, EAST = 7, WEST = 8 }
  enum BOUNDARIES { UPPER = 1, LOWER = 2, LEFT = 3, RIGHT = 4 }
  enum CORNERS { TOP_LEFT = 1, TOP_RIGHT = 2, BOTTOM_LEFT = 3, BOTTOM_RIGHT = 4 }
  enum CROOKS { UPPER_LEFT = 1, UPPER_RIGHT = 2, LOWER_LEFT = 3, LOWER_RIGHT = 4 }
  enum DIRECTIONS { UP = 1, DOWN = 2, LEFT = 3, RIGHT = 4 }
  enum EDGES { TOP = 1, BOTTOM = 2, LEFT = 3, RIGHT = 4 }
  enum QUADRANTS { I = 1, II = 2, III = 3, IV = 4 }

  // Basic functions
  // ========================================================

  function get<T>(grid: T[][], r: number, c: number): T | undefined;
  function set<T>(grid: T[][], r: number, c: number, value: T): T[][];
  function width(grid: any[][]): number;
  function height(grid: any[][]): number;
  function dimensions(grid: any[][]): [number, number];
  function area(grid: any[][]): number;
  function cells(grid: any[][]): number;

  // Essentials
  // ========================================================

  function crop<T>(grid: T[][], r: number, c: number, w: number, h: number): T[][];
  function harvest<T>(grid: T[][], r: number, c: number, w: number, h: number): (T | null)[][];
  function rotate<T>(grid: T[][], direction: DIRECTIONS): T[][];
  function lrotate<T>(grid: T[][]): T[][];
  function rrotate<T>(grid: T[][]): T[][];
  function flip<T>(grid: T[][], axis: AXIS): T[][];
  function vflip<T>(grid: T[][]): T[][];
  function hflip<T>(grid: T[][]): T[][];
  function pan<T>(grid: T[][], direction: DIRECTIONS, steps?: number): T[][];
  function upan<T>(grid: T[][], steps?: number): T[][];
  function lpan<T>(grid: T[][], steps?: number): T[][];
  function dpan<T>(grid: T[][], steps?: number): T[][];
  function rpan<T>(grid: T[][], steps?: number): T[][];
  function slide<T>(grid: T[][], direction: DIRECTIONS, steps?: number): T[][];
  function uslide<T>(grid: T[][], steps?: number): T[][];
  function lslide<T>(grid: T[][], steps?: number): T[][];
  function dslide<T>(grid: T[][], steps?: number): T[][];
  function rslide<T>(grid: T[][], steps?: number): T[][];
  function transpose<T>(grid: T[][]): T[][];
  function antitranspose<T>(grid: T[][]): T[][];
  function fill<T>(grid: any[][], value: T): T[][];
  function fillArea<T>(grid: T[][], r: number, c: number, w: number, h: number, value: T): T[][];
  function pad<T>(grid: T[][], side: EDGES, times: number, value?: any): (T | any)[][];
  function upad<T>(grid: T[][], times: number, value?: any): (T | any)[][];
  function dpad<T>(grid: T[][], times: number, value?: any): (T | any)[][];
  function lpad<T>(grid: T[][], times: number, value?: any): (T | any)[][];
  function rpad<T>(grid: T[][], times: number, value?: any): (T | any)[][];
  function trim<T>(grid: T[][], side: EDGES, num?: number): T[][];
  function utrim<T>(grid: T[][], num?: number): T[][];
  function dtrim<T>(grid: T[][], num?: number): T[][];
  function ltrim<T>(grid: T[][], num?: number): T[][];
  function rtrim<T>(grid: T[][], num?: number): T[][];
  function stitch<T>(grid1: T[][], grid2: T[][], edge: EDGES): T[][];
  function ustitch<T>(grid1: T[][], grid2: T[][]): T[][];
  function dstitch<T>(grid1: T[][], grid2: T[][]): T[][];
  function lstitch<T>(grid1: T[][], grid2: T[][]): T[][];
  function rstitch<T>(grid1: T[][], grid2: T[][]): T[][];
  function paste<T>(grid1: T[][], grid2: T[][], sr: number, sc: number): T[][];
  function glue<T>(grid1: T[][], grid2: T[][], r: number, c: number): (T | null)[][];
  function shuffle<T>(grid: T[][]): T[][];
  function tidy<T>(grid: T[][]): (T | null)[][];

  // Construction
  // ========================================================

  function clone<T>(grid: T[][]): T[][];
  function build<T>(w: number, h: number, value?: T): T[][];
  function buildWith<T>(w: number, h: number, fn: (r: number, c: number, grid: T[][]) => T): T[][];
  function serialize(grid: any[][]): string;
  function nullify(grid: any[][]): null[][];
  function integerize(grid: any[][]): number[][];
  function stringize(grid: any[][]): string[][];

  // Iteration (Part 2)
  // ========================================================

  /** Iterates over every cell in the grid. */
  function eachCell<T>(grid: T[][], iterator: (cell: T, r: number, c: number, grid: T[][]) => void): void;

  /** Iterates over every nth cell, starting from offset s. */
  function nthCell<T>(grid: T[][], n: number, s: number, iterator: (cell: T, r: number, c: number, grid: T[][]) => void): void;

  /** Iterates over each row. */
  function eachRow<T>(grid: T[][], iterator: (row: T[], r: number, grid: T[][]) => void): void;

  /** Iterates over each column. */
  function eachColumn<T>(grid: T[][], iterator: (column: T[], c: number, grid: T[][]) => void): void;

  /** Iterates over cells in a specific rectangular area. */
  function forArea<T>(grid: T[][], r: number, c: number, w: number, h: number, iterator: (cell: T, r: number, c: number, grid: T[][]) => void): void;

  /** Iterates over every cell in the given row. */
  function forRow<T>(grid: T[][], r: number, iterator: (cell: T, r: number, c: number, grid: T[][]) => void): void;

  /** Iterates over every cell in the given column. */
  function forColumn<T>(grid: T[][], c: number, iterator: (cell: T, r: number, c: number, grid: T[][]) => void): void;

  /** Flatten the grid to an array in row-major order. */
  function flatten<T>(grid: T[][]): T[];

  /** Same as flatten, but in column-major order. */
  function squash<T>(grid: T[][]): T[];

  /** Remap the grid to a new grid of the same dimensions. */
  function map<T, U>(grid: T[][], iterator: (cell: T, r: number, c: number, grid: T[][]) => U): U[][];

  /** Reduces each row to a single value, returning an array of those values. */
  function reduce<T, U>(grid: T[][], iterator: (row: T[], r: number, grid: T[][]) => U): U[];

  /** Similar to reduce, but column-by-column. */
  function boildown<T, U>(grid: T[][], iterator: (column: T[], c: number, grid: T[][]) => U): U[];

  // Rows / Columns (Part 2)
  // ========================================================

  function row<T>(grid: T[][], r: number): T[];
  function column<T>(grid: T[][], c: number): T[];
  function top<T>(grid: T[][]): T[];
  function bottom<T>(grid: T[][]): T[];
  function left<T>(grid: T[][]): T[];
  function right<T>(grid: T[][]): T[];
  function widest<T>(grid: T[][]): T[];
  function thinnest<T>(grid: T[][]): T[];
  function tallest<T>(grid: T[][]): T[];
  function shortest<T>(grid: T[][]): T[];
  function setRow<T>(grid: T[][], r: number, array: T[]): T[][];
  function setColumn<T>(grid: T[][], c: number, array: T[]): T[][];
  function fillRow<T>(grid: T[][], r: number, value: T): T[][];
  function fillColumn<T>(grid: T[][], c: number, value: T): T[][];
  function spliceRow<T>(grid: T[][], r: number, array: T[]): T[][];
  function spliceColumn<T>(grid: T[][], c: number, array: T[]): T[][];
  function deleteRow<T>(grid: T[][], r: number): T[][];
  function deleteColumn<T>(grid: T[][], c: number): T[][];

  // Cells (Part 2)
  // ========================================================

  function exists(grid: any[][], r: number, c: number): boolean;
  function occupied(grid: any[][], r: number, c: number): boolean;
  function inBounds(grid: any[][], r: number, c: number): boolean;
  function copy<T>(grid: T[][], r1: number, c1: number, r2: number, c2: number): T[][];
  function move<T>(grid: T[][], r1: number, c1: number, r2: number, c2: number): (T | null)[][];
  function swap<T>(grid: T[][], r1: number, c1: number, r2: number, c2: number): T[][];

  // Location / Relationships (Part 2)
  // ========================================================

  function edge(grid: any[][], r: number, c: number): boolean;
  function edges(grid: any[][], r: number, c: number): EDGES[];
  function corner(grid: any[][], r: number, c: number): boolean;
  function corners(grid: any[][], r: number, c: number): CORNERS[];
  function boundary(grid: any[][], r: number, c: number): boolean;
  function boundaries(grid: any[][], r: number, c: number): BOUNDARIES[];
  function crook(grid: any[][], r: number, c: number): boolean;
  function crooks(grid: any[][], r: number, c: number): CROOKS[];
  function center(grid: any[][], r: number, c: number): boolean;
  function interior(grid: any[][], r: number, c: number): boolean;
  function quadrants(grid: any[][], r: number, c: number): QUADRANTS[];
  function orthogonals<T>(grid: T[][], r: number, c: number): (T | undefined)[];
  function diagonals<T>(grid: T[][], r: number, c: number): (T | undefined)[];
  function neighbors<T>(grid: T[][], r: number, c: number): (T | undefined)[];
  function neighborhood<T>(grid: T[][], r: number, c: number): (T | undefined)[][];
  function euclidean(grid: any[][], r1: number, c1: number, r2: number, c2: number): number;
  function chebyshev(grid: any[][], r1: number, c1: number, r2: number, c2: number): number;
  function manhattan(grid: any[][], r1: number, c1: number, r2: number, c2: number): number;

  // Coordinates (Part 2)
  // ========================================================

  /** Returns coordinates [r, c] for cells where finder returns truthy. */
  function find<T>(grid: T[][], finder: (cell: T, r: number, c: number, grid: T[][]) => boolean): [number, number][];

  /** Returns groups of orthogonally adjacent coordinates. */
  function contiguous<T>(grid: T[][], finder: (cell: T, r: number, c: number, grid: T[][]) => boolean, countDiagonals?: boolean): [number, number][][];

  /** Same as contiguous with countDiagonals = true. */
  function touching<T>(grid: T[][], finder: (cell: T, r: number, c: number, grid: T[][]) => boolean): [number, number][][];

  /** Returns coordinates of surrounding cells. */
  function surrounds(grid: any[][], r: number, c: number, allowOutOfBounds?: boolean): [number, number][];

  // Import / Export (Part 2)
  // ========================================================

  /** Convert a flat array into a grid. */
  function fromArray<T>(arr: T[], rows: number, columns: number): T[][];

  /** Convert canvas pixel data into a grid of [r,g,b,a] arrays. */
  function fromCanvas(canvas: HTMLCanvasElement): [number, number, number, number][][];

  /** Paint grid data to a canvas using a color converter. */
  function toCanvas<T>(grid: T[][], canvas: HTMLCanvasElement, converter?: (cell: T, r: number, c: number, grid: T[][]) => [number, number, number, number]): void;

  // Inspection (from Part 1)
  // ========================================================

  function check(o: any): o is any[][];
  function ragged(grid: any[][]): boolean;
  function rectangular(grid: any[][]): boolean;
  function empty(grid: any[][]): boolean;
  function blank(grid: any[][]): boolean;
  function singular(grid: any[][]): boolean;
  function multitudinous(grid: any[][]): boolean;
  function sparse(grid: any[][]): boolean;
  function dense(grid: any[][]): boolean;
  function same(grid1: any[][], grid2: any[][]): boolean;
  function different(grid1: any[][], grid2: any[][]): boolean;
  function diff(grid1: any[][], grid2: any[][]): [number, number][];
  function contains<T>(grid: T[][], value: T): boolean;
  function includes<T>(grid1: T[][], grid2: T[][]): boolean;
  function symmetrical(grid: any[][], axis: AXIS): boolean;
  function hsymmetrical(grid: any[][]): boolean;
  function vsymmetrical(grid: any[][]): boolean;
}

export { Array2D as default };
