import Senators from '../data/senators'

export const byParty = (party = '') => {
  return Senators.filter(senator => senator.party === party)
}

export const getRepublicans = () => {
  return byParty('Republican')
}

// can also be typed without curly braces in one line, don't use 'return'
// export const getRepublican = () => byParty('Republican')

export const getDemocrats = () => {
  return byParty('Democrat')
}

