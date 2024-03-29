import { EnoxRing, TopazRing, NapkinRing, TriangleRing } from "@lib/config";


export const prodList = () => {
    return (
        [
            {
                src: EnoxRing,
                name: "ENOX RING",
                price: "RS : 450/-",
                height: 237,
                width: 186
            },
            {
                src: TopazRing,
                name: "TOPAZ RING",
                price: "RS : 520/-",
                height: 207,
                width: 216
            },
            {
                src: NapkinRing,
                name: "NAPKIN RING",
                price: "RS : 520/-",
                height: 219,
                width: 253
            },
            
            
            {
                src: TriangleRing,
                name: "TRIANGLE RING",
                price: "RS : 520/-",
                height: 232,
                width: 224
            },
            
        ]
    )

}