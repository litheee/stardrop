import Image from 'next/image'
import cn from 'classnames'

import { Button } from '@/shared/ui'

import classes from './CasePreview.module.scss'

type CasePreviewProps = {
  name: string
  image?: string
  price: number
  oldPrice: number
  openLimit: number
  openedCasesNumber: number
}

export const CasePreview = ({
  name,
  image = '/placeholders/case.png',
  price,
  oldPrice,
  openLimit,
  openedCasesNumber
}: CasePreviewProps) => {
  const limitFillInPercentage = Number(Number((openedCasesNumber / openLimit) * 100).toFixed(2))

  return (
    <div className={classes.casePreview}>
      <div className={classes.image}>
        <Image
          src={image}
          alt={`Кейс ${name}`}
          fill
          style={{
            objectFit: 'contain'
          }}
        />
      </div>

      <div className={classes.caseOpenLimits}>
        <span>
          {openedCasesNumber} / {openLimit}
        </span>

        <div
          className={cn(classes.fillGradient, {
            [classes.fillGradientFull]: limitFillInPercentage === 100
          })}
          style={{
            // if percent lower than 7 styles will broke
            display: limitFillInPercentage > 7 ? 'block' : 'none',
            width: `${limitFillInPercentage}%`
          }}
        />
      </div>

      <h4 className={classes.name}>{name}</h4>

      <div className={classes.price}>
        <Button className={classes.priceBtn}>
          {price} <Image src='/icons/logo-mini.svg' width={18.42} height={18} alt='логотип' />
        </Button>

        <div className={classes.oldPrice}>
          {oldPrice} <Image src='/icons/logo-mini.svg' width={12.42} height={12} alt='логотип' />
        </div>
      </div>
    </div>
  )
}
