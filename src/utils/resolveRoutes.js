const resolveRoutes = (route) => {
    if (route.length <= 3 ){
        let validRoute = route === '/' ? route : '/:id';
     

        return validRoute;

    }else{
        console.log('nop');
    }
    return `/${route}`;
};

export default resolveRoutes