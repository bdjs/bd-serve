declare module 'bd-serve'

declare type Configs = {
  apps: {
    [k in string]: any
  }
}

declare function serve (app: Configs): void

export default serve
