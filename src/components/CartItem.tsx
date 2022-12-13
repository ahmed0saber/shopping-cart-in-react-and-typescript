import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img
            src={item.img}
            style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
            <div>
            {item.name}{" "}
            {quantity > 1 && (
                <span className="text-muted" style={{ fontSize: ".75rem" }}>
                x{quantity}
                </span>
            )}
            </div>
            <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(item.price)}
            </div>
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
        <Button
            style={{ lineHeight: "0" }}
            variant="outline-danger"
            size="sm"
            onClick={() => removeFromCart(item.id)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </Button>
        </Stack>
    )
}