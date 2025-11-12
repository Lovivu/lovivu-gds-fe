import { getTranslations } from 'next-intl/server'
import React from 'react'

type Props = {
    params: Promise<{
        planId: string,
        locale: string
    }>
}

const PlanDetailPage = async ({ params }: Props) => {
    const { planId, locale } = await params;
    const translations = await getTranslations({
        locale,
        namespace: 'plan_detail_page'
    });
    return (
        <div>
            <h2>{translations('title')}</h2> - {planId}
            <h5>{translations('description')}</h5>

        </div>
    )
}

export default PlanDetailPage