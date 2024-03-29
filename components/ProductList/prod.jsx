import { EnoxRing, TopazRing, NapkinRing, TriangleRing, TowelRodRoundLight, TowelRodRoundModel, TumblerSquareModel, ToweLRodSquarModel, PaperHolder, SoapDish, SoapDispenser, DoubleSoapDish, SoapDishWithTumbler, TowelRod, RobHook, Shelf, TumblerHolder, TowelRackRound, TowelRacksquare, DispenserRoundModel, DoubleShopDishGlassModel, DoubleSoapDishRoundModel, PaperHolderRound, RoobeHookRound, RoobeHookSquare, ShopDishGlassModel, SoapDishRoundModel, SoapDishWithDispenser, SoapDishWithDispenserRoundModel, SoapDishWithTumblerRoundModel, TumblerRoundModel } from "@lib/config";
import { nanoid } from "@reduxjs/toolkit";

export const prodList = () => {
    return (
        [
            {
                id : 1,
                src: EnoxRing,
                name: "ENOX RING",
                price: "RS : 450/-",
                height: 237,
                width: 186
            },
            {
                id : 2,
                src: TopazRing,
                name: "TOPAZ RING",
                price: "RS : 520/-",
                height: 207,
                width: 216
            },
            {
                id : 3,
                src: NapkinRing,
                name: "NAPKIN RING",
                price: "RS : 520/-",
                height: 219,
                width: 253
            },
            {
                id : 4,
                src: TumblerHolder,
                name: "TUMBLER HOLDER",
                price: "RS : 520/-",
                height: 237,
                width: 186
            },
            {
                id : 5,
                src: TowelRodRoundModel,
                name: "TOWEL ROD Round Model",
                price: "RS : 800/-",
                height: 45,
                width: 274
            },
            {
                id : 6,
                src: ToweLRodSquarModel,
                name: "TOWEL ROD SQUARE MODEL",
                price: "RS : 720/-",
                height: 47,
                width: 271
            },
            {
                id : 7,
                src: SoapDish,
                name: "SOAP DISH",
                price: "RS : 450/-",
                height: 135,
                width: 213
            },
            {
                id : 8,
                src: SoapDispenser,
                name: "SOAP DISPENSER",
                price: "RS : 450/-",
                height: 196,
                width: 172
            },
            {
                id : 9,
                src: DoubleSoapDish,
                name: "DOUBLE SOAP DISH",
                price: "RS : 1040/-",
                height: 101,
                width: 258
            },
            {
                id : 10,
                src: SoapDishWithTumbler,
                name: "SOAP DISH WITH TUMBLER",
                price: "RS : 1180/-",
                height: 148,
                width: 263
            },
            {
                id : 11,
                src: TriangleRing,
                name: "TRIANGLE RING",
                price: "RS : 520/-",
                height: 232,
                width: 224
            },
            {
                id : 12,
                src: ShopDishGlassModel,
                name: "SOAP DISH GLASS MODEL",
                price: "RS : 450/-",
                height: 123,
                width: 243
            },
            {
                id : 13,
                src: DoubleShopDishGlassModel,
                name: "DOUBLE SOAP DISH GLASS MODEL",
                price: "RS : 1800/-",
                height: 84,
                width: 271
            },
            {
                id : 14,
                src: TowelRodRoundLight,
                name: "TOWEL ROD ROUND LIGHT",
                price: "RS : 760/-",
                height: 58,
                width: 273
            },
            {
                id : 15,
                src: TowelRod,
                name: "TOWEL ROD",
                price: "RS : 760/-",
                height: 237,
                width: 186
            },
            {
                id : 16,
                src: Shelf,
                name: "SHELF",
                price: "RS : 520/-",
                height: 237,
                width: 186
            },
            {
                id : 17,
                src: RobHook,
                name: "ROOBE HOOK",
                price: "RS : 380/-",
                height: 237,
                width: 186
            },
            {
                id : 18,
                src: RoobeHookRound,
                name: "ROOBE HOOK ROUND",
                price: "RS : 380/-",
                height: 137,
                width: 155
            },
            {
                id : 19,
                src: RoobeHookSquare,
                name: "ROOBE HOOK SQUARE",
                price: "RS : 560/-",
                height: 99,
                width: 199
            },
            {
                id : 20,
                src: SoapDishWithDispenser,
                name: "SOAP DISH WITH DISPENSer",
                price: "RS : 1380/-",
                height: 153,
                width: 252
            },
            {
                id : 21,
                src: TumblerRoundModel,
                name: "TUMBLER ROUND MODEL",
                price: "RS : 708/-",
                height: 229,
                width: 207
            },
            {
                id : 22,
                src: TumblerSquareModel,
                name: "TUMBLER SQUARE MODEL",
                price: "RS : 740/-",
                height: 194,
                width: 205
            },
            {
                id : 23,
                src: DispenserRoundModel,
                name: "DISPENSER ROUND MODEL",
                price: "RS : 820/-",
                height: 208,
                width: 155
            },
            {
                id : 24,
                src: SoapDishRoundModel,
                name: "SOAP DISH ROUND MODEL",
                price: "RS : 540/-",
                height: 165,
                width: 194
            },
            {
                id : 25,
                src: PaperHolder,
                name: "PAPER HOLDER SQUARE",
                price: "RS : 1000/-",
                height: 220,
                width: 201
            },
            {
                id : 26,
                src: PaperHolderRound,
                name: "PAPER HOLDER ROUND",
                price: "RS : 940/-",
                height: 206,
                width: 189
            },
            {
                id : 27,
                src: DoubleSoapDishRoundModel,
                name: "DOUBLE SOAP DISH ROUND MODEL",
                price: "RS : 944/-",
                height: 270,
                width: 106
            },
            {
                id : 28,
                src: TowelRackRound,
                name: "TOWEL RACK ROUND",
                price: "RS : 2500/-",
                height: 81,
                width: 265
            },
            {
                id : 29,
                src: TowelRacksquare,
                name: "TOWEL RACK SQUARE",
                price: "RS : 2580/-",
                height: 80,
                width: 264
            },
            {
                id : 30,
                src: SoapDishWithDispenserRoundModel,
                name: "SOAP DISH WITH DISPENSER ROUND MODEL",
                price: "RS : 1240/-",
                height: 160,
                width: 242
            },
            {
                id : 31,
                src: SoapDishWithTumblerRoundModel,
                name: "SOAP DISH WITH TUMBLER ROUND MODEL",
                price: "RS : 1240/-",
                height: 160,
                width: 242
            },
        ]
    )

}