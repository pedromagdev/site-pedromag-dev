import { SearchIcon } from '@/components/icons';
import { Input } from '@nextui-org/input';
import { Kbd } from '@nextui-org/kbd';
import React from 'react';

const InputSearch = () => {
    return (
        <Input
          aria-label="Search"
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm",
          }}
          endContent={
            <Kbd className="hidden lg:inline-block" keys={["command"]}>
              K
            </Kbd>
          }
          labelPlacement="outside"
          placeholder="Proucurar..."
          startContent={
            <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
          }
          type="search"
        />
      );
}

export default InputSearch;
