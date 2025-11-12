import { getTranslations } from 'next-intl/server';
import React from 'react'

type Props = {
    params: Promise<{ locale: string }>
}

const RegisterPage = async ({ params }: Props) => {
    const { locale } = await params;
    const translations = await getTranslations({
        locale,
        namespace: 'register_page'
    });
    return (
        <div>
            <h2>{translations('title')}</h2>
            <h5>{translations('description')}</h5>
        </div>
    )
}

export default RegisterPage