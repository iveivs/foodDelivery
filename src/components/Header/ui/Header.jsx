import cls from "./Header.module.scss"
import PizzaIcon from "@/assets/img/logoPizza.svg?react"
import ToggleIcon from "@/assets/img/toggleTheme.svg?react"
import CartleIcon from "@/assets/img/cart.svg?react"
import { Button } from "@/ui/Button"
import { Icon } from "@/ui/icon"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()

    const onClick = () => {

        navigate('/')
    }
    return ( 
        <header className={cls.header}>
            <div className={cls.container}>
                <div className={cls.content}>
                    <div className={cls.logo}>
                        
                        < Icon Svg={PizzaIcon} clickable onClick={onClick}/>
                        <p>FoodDelivery</p>
                    </div>
                    
                    <div className={cls.buttons}>
                        < Icon Svg={ToggleIcon} />

                        <Button border className={cls.button} >
                            < Icon Svg={CartleIcon} />
                            <span>0 р.</span>
                        </Button> 
                    </div>
                </div>
                
            </div>
        </header>
    );
}
 
export  { Header };