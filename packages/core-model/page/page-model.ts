import { BoringDocument } from "@boring.so/document-model";
import { PageParentId, PageRoot, PageRootKey } from "@core/state";

export type PageId = string;

export interface PageReference extends IPageHierarchyReference {
  id: PageId;
  type: "boring-document" | "nothing-document";
  name: string;
  parent?: string; // fixme
  children?: PageReference[];
}

/**
 * interface used for indicating page's place in page tree (hierarchy)
 */
export interface IPageHierarchyReference {
  /** id of this referencing page */
  id: PageId;
  /** parent page of this page. if on root, it's undefined, also can be `"root"` or `0` */
  parent?: PageId;
  /** index under parent 0 is up (lower is upper in visual tree) */
  sort: number;
}

export type TPageMeta<T = any, V = any> = { [key: string]: V } | T;

type NothingDocument = never; // change this when nothing engine is complete.
export type PageDocumentType = "boring-document" | "nothing-document";
export type PageDocumentLike = BoringDocument | NothingDocument;
/**
 * Core Page model
 */
export interface Page<Meta = any>
  extends PageReference,
    IPageHierarchyReference {
  id: PageId;
  type: PageDocumentType;
  name: string;
  document: PageDocumentLike;

  /** meta data provided by first party extensions */
  meta?: TPageMeta<Meta>;

  /** parent page of this page. if on root, it's undefined, also can be `"root"` or `0` */
  parent?: PageId;

  /** index under parent 0 is up (lower is upper in visual tree) */
  sort: number;
}

type ObjectLike = object | string;

/**
 * 1. fetch `() => Promise<T>`
 * 2. cached `() => T`
 * 3. static `T`
 */
type FetchOrCachedHandler<T extends ObjectLike> =
  | T
  | (() => T)
  | (() => Promise<T>);
type Fetchable<T extends ObjectLike> = T | (() => Promise<T>);

// export async function handle<T extends ObjectLike>(
//   input: Fetchable<T>,
//   handlers: {
//     fetch?: () => T;
//     cache?: () => T;
//   }
// ): Promise<T> {
//   if (typeof input == "function") {
//     return await input();
//   } else {
//     return input;
//   }
// }

export interface BoringDocumentPage extends Page {
  type: "boring-document";
  document: PageDocumentLike;
}

export function isOnRoot(p: { parent?: PageParentId }): boolean {
  return (
    p.parent === PageRoot || p.parent === PageRootKey || p.parent === undefined
  );
}

export function parentPageIdToString(p: PageParentId): string {
  if (isOnRoot({ parent: p })) {
    return PageRootKey;
  } else {
    return p as string;
  }
}
