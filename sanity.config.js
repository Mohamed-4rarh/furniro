import { defineConfig } from "sanity";
import { schemas } from "./schemas";
import { deskTool } from 'sanity/desk'
import { visionTool } from "@sanity/vision";

const config =  defineConfig({
    projectId: '29pina09',
    dataset: 'production',
    basePath: '/admin',
    title: 'Furniro Studio',
    apiVersion: '2021-10-21',
    plugins: [deskTool(), visionTool()],
    schema: { types: schemas }
})

export default config