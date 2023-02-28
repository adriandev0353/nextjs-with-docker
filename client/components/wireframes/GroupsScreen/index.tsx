import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { GroupScreen, AddGroupScreen, Igroup } from './Group'
import { log } from '@sweez/libs'

const mockGroupData: Igroup[] = [
  {
    name: 'The Big Sexies Lottery',
    moderator: 'Edward Sweezey',
    member_status: 'moderator',
    weekly_lottery: 'enrolled',
    tickets_purchased: 3,
    tickets_submitted: 0,
    newgroup_msgs: 7,
  },
  {
    name: "Bryce's Lottery",
    moderator: 'Bryce Peters',
    member_status: 'member',
    weekly_lottery: 'enrolled',
    tickets_purchased: 3,
    tickets_submitted: 2,
    newgroup_msgs: 2,
  },
  {
    name: "Anthony Coleman's Lottery",
    moderator: 'Anthony Coleman',
    member_status: 'member',
    weekly_lottery: 'enrolled',
    tickets_purchased: 2,
    tickets_submitted: 1,
    newgroup_msgs: 5,
  },
]
const slides = mockGroupData.map((group) => (
  <SwiperSlide
    key={group.name}
    className="bg-primary"
  >
    <GroupScreen group={group} />
  </SwiperSlide>
))

slides.push(
  <SwiperSlide key='add_group_screen'>
    <AddGroupScreen />
  </SwiperSlide>
)

const GroupScreens: React.FC = () => {
  function onSlideChangeHandler (activeIndex) {
    log('onSlideChangeHandler: activeIndex', activeIndex) 
  }

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      speed={500}
      loop={false}
      touchRatio={1.5}
      navigation={true}
      effect={'slide'}
      pagination={{ clickable: true }}
      className="flex"
      onSlideChange={({activeIndex}) => onSlideChangeHandler(activeIndex)}
    >
      {slides}
    </Swiper>
  )
}

export { GroupScreens }
