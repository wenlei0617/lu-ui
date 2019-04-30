export interface LuConfirmMethod {
  (message: string):Promise<any>
}

export interface LuConfirm {
  alert: LuConfirmMethod
}

declare module 'vue/types/vue' {
  interface Vue {
    $alert: LuConfirmMethod
  }
}