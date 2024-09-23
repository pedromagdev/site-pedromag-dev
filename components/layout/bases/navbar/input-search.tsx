import { SearchIcon } from '@/components/icons';
import { Input } from '@nextui-org/input';
import React from 'react';

const InputSearch = () => {
    return (
        <Input
          aria-label="Search"
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-xs",
          }}
          className='w-full'
          labelPlacement="outside"
          placeholder="Proucurar..."
          endContent={
            <SearchIcon className="text-base text-app pointer-events-none flex-shrink-0" />
          }
          type="search"
        />
      );
}

export default InputSearch;
