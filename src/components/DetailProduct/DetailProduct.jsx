import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPaintById } from '../../redux/actions/productActionsTest';
import './DetailProduct.css'

export default function DetailProduct () {

    const dispatch = useDispatch();
    const { id } = useParams();
    const paint = useSelector((state) => state.testReducer.paintDetail);

    useEffect(() => {
        dispatch(getPaintById(id));
    }, [dispatch, id]);

    console.log(paint);

    return (
        !paint ? <div>loading...</div> :
        <div className="bg-white">  
            <div className="p-8 text-gray-600 md:px-12 xl:px-8">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    {/* Esta parte es un image magnifier, se necesita mejorar su uso, asi que por ahora no esta habilitado 
                    <div className="md:5/12 lg:w-4/12" 
                    data-role="imagemagnifier"
                    data-magnifier-mode="glass"
                    data-lens-type="circle"
                    data-lens-size="200">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg/800px-Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg" alt="productImage" loading="lazy" width="" height="100px" />
                    </div> */}
                    <div className="md:5/12 lg:w-4/12">
                        <img alt="" src={paint.userImage} loading="lazy" width="" height="" />
                    </div>
                    <div className="m-auto md:7/12 lg:w-6/12">
                    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
                    <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                    <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                    </div>
                </div>
            </div>
        </div>                            
    )
}