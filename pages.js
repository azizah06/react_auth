import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './home'
import Login from './login'
import Pegawai from './pegawai'
import register from './register'

const Pages = () => (
    <Switch>
        <Route path='/pegawai' component={Pegawai} />
        <Route exact path='/' component={Home} />
        <Route path='/register' component={register}/>
        <Route path='/login' component={Login} />

    </Switch>
)

export default Pages
