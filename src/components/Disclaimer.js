import Card from "./Card"

export default function Disclaimer() {
    return (
        <div className="mx-8 w-1/2 ml-auto mr-auto overflow-y-hidden">
        <Card 
            content={
                <div className="p-4">
                    <p>Disclaimer: LEGO®, the LEGO® logo, the Brick, SPIKE™, and the Minifigure are trademarks of ©The LEGO® Group.
All other trademarks and copyrights are the property of their respective owners. All rights reserved.
This content isn't affiliated, authorized, or endorsed by The LEGO Group.</p>
                </div>
            }
        />

       
    </div>
    )
}