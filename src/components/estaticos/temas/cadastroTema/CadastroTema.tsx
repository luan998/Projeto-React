import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { useHistory, useParams } from 'react-router';
import Tema from '../../../../models/Tema';
import { buscaId, post, put } from '../../../../service/Service';
import './CadastroTema.css'
import useLocalStorage from 'react-use-localstorage';


function CadastroTema() {
    let history = useHistory();
    const { id } = useParams<{id: string}>();
    const[token, setToken] = useLocalStorage('token');
    const[tema, setTema] = useState<Tema>({
        id:0,
        descricao: ''
    })

    useEffect(()=>{
        if( token ==''){
            alert('Você precisa estar logado')
            history.push('/login')
        }
    }, [token])

    useEffect(()=>{
        if(id !== undefined){
            findById(id)
        }
    },[id])

    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>){
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            put(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema atualizado com sucesso');
        } else {
            post(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema cadastrado com sucesso');
        }
        back()

    }

    function back() {
        history.push('/temas')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" className='titulo-formulario' component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" className='corfundo-cadastro-tema' fullWidth />
                <Button type="submit" variant="contained" className='botao-criar-tema'>
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;