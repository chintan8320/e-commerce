import { TumblerSquareModel, PaperHolder, SoapDish, SoapDispenser, DoubleSoapDish, SoapDishWithTumbler, DispenserRoundModel, DoubleShopDishGlassModel, DoubleSoapDishRoundModel, PaperHolderRound, RoobeHookRound, RoobeHookSquare, ShopDishGlassModel, SoapDishRoundModel, SoapDishWithDispenser, SoapDishWithDispenserRoundModel, SoapDishWithTumblerRoundModel, TumblerRoundModel } from "@lib/config";


export const prodList = () => {
    return (
        [
            {
                src: SoapDish,
                name: "SOAP DISH",
                price: "RS : 450/-",
                height: 135,
                width: 213
            },
            {
                src: SoapDispenser,
                name: "SOAP DISPENSER",
                price: "RS : 450/-",
                height: 196,
                width: 172
            },
            {
                src: DoubleSoapDish,
                name: "DOUBLE SOAP DISH",
                price: "RS : 1040/-",
                height: 101,
                width: 258
            },
            {
                src: SoapDishWithTumbler,
                name: "SOAP DISH WITH TUMBLER",
                price: "RS : 1180/-",
                height: 148,
                width: 263
            },
            
        ]
    )

}