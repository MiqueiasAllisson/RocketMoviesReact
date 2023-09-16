
import {Container,   Profile } from "./styles"
import { Input } from "../Input"

export function Header() { 
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Input type="search" placeholder="Pesquisar pelo título"/>
            <Profile>
                <div>
                <h2>Rodrigo Gonçalves</h2>
                <span>sair</span>
                </div>

                <img src="https://github.com/MiqueiasAllisson.png" alt="Imagem do usuário" />
            </Profile>
            
        </Container>
    )
    }