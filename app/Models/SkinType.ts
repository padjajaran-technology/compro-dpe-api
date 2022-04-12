import { DateTime } from "luxon";
import { column } from "@ioc:Adonis/Lucid/Orm";
import BaseModel from "./BaseModel";

export default class SkinType extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public address: string;

  @column()
  public latitude: string;

  @column()
  public longitude: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
