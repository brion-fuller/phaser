import { PERMISSION, PermissionsComponent } from "./PermissionsComponent";
export function WillTransformChildren(id) {
  return !!PermissionsComponent.data[id][PERMISSION.WILL_TRANSFORM_CHILDREN];
}