/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.png"
declare module "*.jpg"
declare module "*.css" {
  const value: string;
  export default value;
}
