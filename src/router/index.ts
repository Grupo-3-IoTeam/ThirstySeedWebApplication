import { createRouter, createWebHistory } from 'vue-router'
import SetIrrigationMode from '../irrigation-management/components/set-irrigation-mode.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //{ path: '/manage-parcels', name: 'ManageParcels', component: ManageParcelsView },
    //{ path: '/view-parcels-status', name: 'ViewParcelsStatus', component: SetIrrigationMode },
    { path: '/set-irrigation-mode', name: 'SetIrrigationMode', component: SetIrrigationMode },
    //{ path: '/scheduled-irrigations', name: 'ScheduledIrrigations', component: ScheduledIrrigationsView },
    //{ path: '/irrigation-reports', name: 'IrrigationReports', component: IrrigationReportsView },
    //{ path: '/notifications', name: 'Notifications', component: NotificationsView },
    //{ path: '/account', name: 'Account', component: AccountView },
    //{ path: '/support', name: 'Support', component: SupportView },
  ]
})

export default router
