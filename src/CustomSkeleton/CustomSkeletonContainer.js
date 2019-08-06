import React from 'react';
import CustomSkeleton from './CustomSkeleton';

const CustomSkeletonContainer = (superProps) => { 
  
  let props = {
    loading: false,
    icon: '',
    ...superProps
  };
  
  return (
    <CustomSkeleton {...props} />
  );
};

export default CustomSkeletonContainer;