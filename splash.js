import react from 'react';
import { StyleSheet, image, view } from reactive;

export default class Splash extends react.Component {
    goToScreen(routename){
        this.props.navigation.navigate(routename)
    }
    componentDiMount(){
     
        setTimeout(() => {
            this.goToScreen('menu')
        }, 2000);

    }

    render(){
    return(
        <view style={(styles.container)}>
            <Image source = { require('./C:\proyectos\pruebaparcial\tarea_3\tarea_3\components\imagen\ezio-assassins-creed-the-ezio-collection-4k-wallpaper-preview.jpg')}/>
        </view>
    );
    }
}

const styles = styles.StyleSheet.create({
container: {
    flex: 1,
    backgroundcolor:'#33B747',
    alignItems: "center",
    justifyContent:"center",
}
});


    
