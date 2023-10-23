"use client"

import config from '@/sanity.config'
import { NextStudio } from 'next-sanity/studio'
import React from 'react'

export default function AdminPage() {
  return <NextStudio config={config} />
}
