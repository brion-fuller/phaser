import { GetNextSiblingID } from "./GetNextSiblingID";
import { GetPreviousSiblingID } from "./GetPreviousSiblingID";
export function AreSiblings(childA, childB) {
  return GetNextSiblingID(childA) === childB || GetPreviousSiblingID(childA) === childB;
}