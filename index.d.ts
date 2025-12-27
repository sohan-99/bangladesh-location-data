/**
 * Bangladesh Location Data Type Definitions
 * Provides comprehensive location data for Bangladesh including Divisions, Districts, Upazilas, and Unions
 */

/**
 * Represents a location item with a value and title
 */
export interface LocationItem {
  /** Unique identifier for the location */
  value: number;
  /** Name/title of the location */
  title: string;
}

/**
 * Map of parent location IDs to their child locations
 */
export interface LocationMap {
  [parentId: string]: LocationItem[];
}

/**
 * Division data (top-level administrative divisions)
 */
export const divisions_en: LocationItem[];

/**
 * District data mapped by division ID
 */
export const districts_en: LocationMap;

/**
 * Upazila data mapped by district ID
 */
export const upazilas_en: LocationMap;

/**
 * Union data mapped by upazila ID
 */
export const unions_en: LocationMap;

/**
 * Bangla language data
 */
export const divisions_bn: LocationItem[];
export const districts_bn: LocationMap;
export const upazilas_bn: LocationMap;
export const unions_bn: LocationMap;
