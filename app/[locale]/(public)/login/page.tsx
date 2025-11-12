import { getTranslations } from 'next-intl/server';
import React from 'react'

type Props = {
    params: Promise<{ locale: string }>
}

const LoginPage = async ({ params }: Props) => {
    const { locale } = await params;
    const translations = await getTranslations({
        locale,
        namespace: 'login_page'
    });
    return (
        <div>
            <h2>{translations('title')}</h2>
            <h5>{translations('description')}</h5>

        </div>
    )
}

export default LoginPage