import { Provider } from 'mobx-react'
import "@/styles/global.css"
import { AppProps } from 'next/app'
import React, { ReactNode, StrictMode } from 'react'
import { RootLayout } from '@/components/layout/layout-root'
import { useRootStore } from '@/store/root.store'

export default function App({ Component, pageProps }:
  AppProps & { Component: { getLayout: (page: ReactNode) => ReactNode, getMenu: () => ReactNode } }) {
  const store = useRootStore(pageProps.initialState)
  const getLayout = Component.getLayout || ((page: JSX.Element) => page)
  const getMenu = Component.getMenu || ((page: JSX.Element) => page)

  return (
    <StrictMode>
      <Provider store={store}>
        <RootLayout
          menu={getMenu()}
        >
          {getLayout(<Component {...pageProps} />)}
        </RootLayout>
      </Provider>
    </StrictMode>
  )
}
