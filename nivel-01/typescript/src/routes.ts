import { Request, Response } from "express";

/**
 * Function return message hello typescript
 * @param _ request
 * @param res response
 */
export function helloWorld(_: Request, res: Response) {
  return res.json({ ok: "Hello Typescript.." });
}
