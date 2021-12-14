export type InvoiceStatus = 'Paid' | string

export type InvoiceLayoutProps = {
  id: string | undefined
}

export type InvoiceClientType = {
  name: string
  address: string
  company: string
  country: string
  contact: string
  companyEmail: string
}

export type InvoiceType = {
  id: number
  total: number
  avatar: string
  service: string
  dueDate: string
  issuedDate: string
  balance: string | number
  client: InvoiceClientType
  invoiceStatus: InvoiceStatus
}

export type InvoicePaymentType = {
  iban: string
  totalDue: string
  bankName: string
  country: string
  swiftCode: string
}

export type SingleInvoiceType = {
  invoice: InvoiceType
  paymentDetails: InvoicePaymentType
}
