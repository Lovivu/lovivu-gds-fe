import { getTranslations } from 'next-intl/server';
import React from 'react'

type Props = {
    params: Promise<{ locale: string }>
}

const PlanPage = async (props: Props) => {
    const { params } = props;
    const { locale } = await params;
    const translations = await getTranslations({
        locale,
        namespace: 'plan_page'
    });
    return (
        <div>
            <h2>{translations('title')}</h2>
            <h5>{translations('description')}</h5>

        </div>
    )
}

export default PlanPage