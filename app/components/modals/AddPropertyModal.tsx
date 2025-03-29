'use client';

import Image from 'next/image';

import { useState } from 'react';
import Modal from './Modal';
import CustomButton from '../forms/CustomButton';
import Categories from '../addproperty/Categories';

import useAddPropertyModal from '@/app/hooks/useAddPropertyModal';

const AddPropertyModal = () => {
    //
    // States
    const [currentStep, setCurrentStep] = useState(1);
    const [dataCategory, setDataCategory] = useState('');
    const [dataTitle, setDataTitle] = useState('');
    const [dataDescription, setDataDescription] = useState('');
    const [dataPrice, setDataPrice] = useState('');
    const [dataBedrooms, setDataBedrooms] = useState('');
    const [dataBathrooms, setDataBathrooms] = useState('');
    const [dataGuests, setDataGuests] = useState('');

    //
    //

    const addPropertyModal = useAddPropertyModal();

    //
    // Set datas

    const setCategory = (category: string) => {
        setDataCategory(category);
    }

    //
    //

    const content = (
        <>
            {currentStep == 1 ? (
                <>
                    <h2 className='mb-6 text-2xl'>Choose category</h2>

                    <Categories 
                        dataCategory={dataCategory}
                        setCategory={(category) => setCategory(category)}
                    />

                    <CustomButton 
                        label='Next'
                        onClick={() => setCurrentStep(2)}
                    />
                </>
            ) : currentStep == 2 ? (
                <>
                    <h2 className='mb-6 text-2xl'>Describe your place </h2>
                    
                    <div className='pt-3 pb-6 space-y-4'>
                        <div className='flex flex-col space-y-2'>
                            <label>Title</label>
                            <input 
                                type='text'
                                value={dataTitle}
                                onChange={(e) => setDataTitle(e.target.value)}
                                className='w-full p-4 border border-gray-600 rounded-xl'
                            />
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label>Description</label>
                            <textarea
                                value={dataDescription}
                                onChange={(e) => setDataDescription(e.target.value)}
                                className='w-full h-[200px] p-4 border border-gray-600 rounded-xl'
                            ></textarea>
                        </div>
                    </div>

                    <CustomButton 
                        label='Previous'
                        className='mb-2 bg-black hover:bg-gray-800'
                        onClick={() => setCurrentStep(1)}
                    />

                    <CustomButton 
                        label='Next'
                        onClick={() => setCurrentStep(3)}
                    />
                </>
            ) : currentStep == 3 ? (
                <>
                    <h2 className='mb-6 text-2xl'> Details </h2>

                    <div className='pt-3 pb-6 space-y-4'>
                        <div className='flex flex-col space-y-2'>
                            <label>Price per night</label>
                            <input 
                                type='number'
                                value={dataPrice}
                                onChange={(e) => setDataPrice(e.target.value)}
                                className='w-full p-4 border border-gray-600 rounded-xl'
                            />
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label>Bedrooms</label>
                            <input 
                                type='number'
                                value={dataBedrooms}
                                onChange={(e) => setDataBedrooms(e.target.value)}
                                className='w-full p-4 border border-gray-600 rounded-xl'
                            />
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label>Bathrooms</label>
                            <input 
                                type='number'
                                value={dataBathrooms}
                                onChange={(e) => setDataBathrooms(e.target.value)}
                                className='w-full p-4 border border-gray-600 rounded-xl'
                            />
                        </div>
                        
                        <div className='flex flex-col space-y-2'>
                            <label>Maximum number of Guests</label>
                            <input 
                                type='number'
                                value={dataGuests}
                                onChange={(e) => setDataGuests(e.target.value)}
                                className='w-full p-4 border border-gray-600 rounded-xl'
                            />
                        </div>
                    </div>

                    <CustomButton 
                        label='Previous'
                        className='mb-2 bg-black hover:bg-gray-800'
                        onClick={() => setCurrentStep(2)}
                    />

                    <CustomButton 
                        label='Next'
                        onClick={() => setCurrentStep(4)}
                    />
                </>
            ) : (
                <p>asdf</p>
            )}
        </>                
    )

    return (
        <>
            <Modal
                isOpen={addPropertyModal.isOpen}
                close={addPropertyModal.close}
                label="Add Property"
                content={content}
            />
        </>
    )
}

export default AddPropertyModal;