import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseBrand, chooseSize, choosePrice } from "../redux/slices/RootSlice";

// interfaces

interface ContactFormProps {
  id?: string[]
}          

const ContactForm = (props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {
      // Use dispatch to update our state in our store
      // dispatch(chooseName(data.name));
      // console.log(data.name)
      dispatch(chooseBrand(data.brand));
      console.log(data.brand)
      dispatch(chooseSize(data.size));
      console.log(data.size)
      dispatch(choosePrice(data.price));
      console.log(data.price)


      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 2000);
    }
    
  }

  return (


    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div>
          <label htmlFor="name">Name</label>
          <Input {...register('name')} name='name' placeholder="Name"/>
        </div> */}
        <div>
          <label htmlFor="brand">Brand</label>
          <Input {...register('brand')} name='brand' placeholder="Brand"/>
        </div>
        <div>
          <label htmlFor="size">Size</label>
          <Input {...register('size')} name='size' placeholder="Size"/>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <Input {...register('price')} name='price' placeholder="Price"/>
        </div>
        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm