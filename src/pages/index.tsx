import { Inter } from 'next/font/google';
import React from "react";
import {Htag} from "../../components";

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
    </>
  );
}
