"use client"
import { Accordion, AccordionItem, Image } from '@nextui-org/react';
import React from 'react';

const AboutInfo = () => {
    return (
        <section className=' w-full px-14'>
            <div className="grid grid-cols-2 gap-4">
                    <Image
                        src='/images/banners/team-pedromag.jpg'
                    />
                <Accordion defaultExpandedKeys={"1"}>
                    <AccordionItem key="1" aria-label="Accordion 1" title="Quem Somos ?">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eius.
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title="Nossos contactos">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eius.
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eius.
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}

export default AboutInfo;
