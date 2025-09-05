"use client";

import { useState } from "react";
import {
  Dialog,
  DropdownMenu,
  Tooltip,
  Checkbox,
  Switch,
  Slider,
  Progress,
  Tabs,
  Select,
  RadioGroup,
  Accordion,
  AlertDialog,
  Popover,
  HoverCard,
  Avatar,
  Separator,
} from "radix-ui";
import {
  ChevronDownIcon,
  PersonIcon,
  GearIcon,
  ExitIcon,
  ChevronRightIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";

export default function UnifiedRadixPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);
  const [radioValue, setRadioValue] = useState("1");
  const [selectValue, setSelectValue] = useState("apple");
  return <div></div>;
  //   return (
  //     <div className="min-h-screen p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  //       <div className="max-w-6xl mx-auto">
  //         {/* 标题 */}
  //         <div className="mb-12 text-center">
  //           <h1 className="mb-4 text-5xl font-bold text-white">
  //             统一的 Radix UI 导入
  //           </h1>
  //           <p className="text-xl text-white/80">
  //             使用{" "}
  //             <code className="px-2 py-1 rounded bg-white/20">
  //               import &#123; Dialog, DropdownMenu, Tooltip &#125; from "radix-ui"
  //             </code>
  //           </p>
  //         </div>

  //         {/* 组件网格 */}
  //         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  //           {/* 对话框 */}
  //           <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
  //             <h3 className="mb-4 text-lg font-semibold text-white">
  //               Dialog 对话框
  //             </h3>
  //             <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
  //               <Dialog.Trigger asChild>
  //                 <button className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
  //                   打开对话框
  //                 </button>
  //               </Dialog.Trigger>
  //               <Dialog.Portal>
  //                 <Dialog.Overlay className="fixed inset-0 bg-black/50" />
  //                 <Dialog.Content className="fixed w-full max-w-md p-6 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2">
  //                   <Dialog.Title className="mb-4 text-lg font-semibold">
  //                     编辑个人资料
  //                   </Dialog.Title>
  //                   <Dialog.Description className="mb-4 text-sm text-gray-600">
  //                     更新你的个人信息。
  //                   </Dialog.Description>
  //                   <div className="space-y-4">
  //                     <input
  //                       className="w-full px-3 py-2 border rounded"
  //                       placeholder="姓名"
  //                       defaultValue="张三"
  //                     />
  //                     <input
  //                       className="w-full px-3 py-2 border rounded"
  //                       placeholder="邮箱"
  //                       defaultValue="zhangsan@example.com"
  //                     />
  //                   </div>
  //                   <div className="flex justify-end gap-2 mt-6">
  //                     <Dialog.Close asChild>
  //                       <button className="px-4 py-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-300">
  //                         取消
  //                       </button>
  //                     </Dialog.Close>
  //                     <Dialog.Close asChild>
  //                       <button className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
  //                         保存
  //                       </button>
  //                     </Dialog.Close>
  //                   </div>
  //                 </Dialog.Content>
  //               </Dialog.Portal>
  //             </Dialog.Root>
  //           </div>

  //           {/* 下拉菜单 */}
  //           <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
  //             <h3 className="mb-4 text-lg font-semibold text-white">
  //               DropdownMenu 下拉菜单
  //             </h3>
  //             <DropdownMenu.Root>
  //               <DropdownMenu.Trigger asChild>
  //                 <button className="flex items-center gap-2 px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
  //                   选项 <ChevronDownIcon />
  //                 </button>
  //               </DropdownMenu.Trigger>
  //               <DropdownMenu.Portal>
  //                 <DropdownMenu.Content className="p-2 bg-white rounded-lg shadow-lg">
  //                   <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 rounded cursor-pointer hover:bg-gray-100">
  //                     <PersonIcon /> 个人资料
  //                   </DropdownMenu.Item>
  //                   <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 rounded cursor-pointer hover:bg-gray-100">
  //                     <GearIcon /> 设置
  //                   </DropdownMenu.Item>
  //                   <DropdownMenu.Separator className="h-px my-1 bg-gray-200" />
  //                   <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-red-600 rounded cursor-pointer hover:bg-red-50">
  //                     <ExitIcon /> 退出登录
  //                   </DropdownMenu.Item>
  //                 </DropdownMenu.Content>
  //               </DropdownMenu.Portal>
  //             </DropdownMenu.Root>
  //           </div>

  //           {/* 工具提示 */}
  //           <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
  //             <h3 className="mb-4 text-lg font-semibold text-white">
  //               Tooltip 工具提示
  //             </h3>
  //             <Tooltip.Provider>
  //               <Tooltip.Root>
  //                 <Tooltip.Trigger asChild>
  //                   <button className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
  //                     悬停查看提示
  //                   </button>
  //                 </Tooltip.Trigger>
  //                 <Tooltip.Portal>
  //                   <Tooltip.Content className="px-3 py-2 text-sm text-white bg-gray-900 rounded shadow-lg">
  //                     这是一个工具提示
  //                     <Tooltip.Arrow className="fill-gray-900" />
  //                   </Tooltip.Content>
  //                 </Tooltip.Portal>
  //               </Tooltip.Root>
  //             </Tooltip.Provider>
  //           </div>

  //           {/* 复选框和开关 */}
  //           <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
  //             <h3 className="mb-4 text-lg font-semibold text-white">
  //               Checkbox & Switch
  //             </h3>
  //             <div className="space-y-4">
  //               <div className="flex items-center gap-2">
  //                 <Checkbox.Root
  //                   className="flex items-center justify-center w-5 h-5 bg-transparent border-2 border-white rounded"
  //                   checked={checkboxChecked}
  //                   onCheckedChange={(checked) =>
  //                     setCheckboxChecked(checked === true)
  //                   }
  //                 >
  //                   <Checkbox.Indicator>
  //                     <Cross2Icon className="w-3 h-3 text-white" />
  //                   </Checkbox.Indicator>
  //                 </Checkbox.Root>
  //                 <label className="text-white">复选框选项</label>
  //               </div>
  //               <div className="flex items-center gap-2">
  //                 <Switch.Root
  //                   className="relative h-6 w-11 rounded-full bg-gray-600 data-[state=checked]:bg-purple-600"
  //                   checked={switchChecked}
  //                   onCheckedChange={setSwitchChecked}
  //                 >
  //                   <Switch.Thumb className="block h-5 w-5 translate-x-0.5 rounded-full bg-white transition-transform data-[state=checked]:translate-x-[22px]" />
  //                 </Switch.Root>
  //                 <label className="text-white">开关选项</label>
  //               </div>
  //             </div>
  //           </div>

  //           {/* 滑块和进度条 */}
  //           <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
  //             <h3 className="mb-4 text-lg font-semibold text-white">
  //               Slider & Progress
  //             </h3>
  //             <div className="space-y-4">
  //               <div>
  //                 <label className="block mb-2 text-sm text-white">
  //                   滑块: {sliderValue[0]}
  //                 </label>
  //                 <Slider.Root
  //                   className="relative flex items-center w-full h-5 select-none touch-none"
  //                   value={sliderValue}
  //                   onValueChange={setSliderValue}
  //                   max={100}
  //                   step={1}
  //                 >
  //                   <Slider.Track className="relative w-full h-1 bg-gray-600 rounded-full grow">
  //                     <Slider.Range className="absolute h-full bg-purple-600 rounded-full" />
  //                   </Slider.Track>
  //                   <Slider.Thumb className="block w-5 h-5 bg-white rounded-full shadow-lg focus:ring-2 focus:ring-purple-500 focus:outline-none" />
  //                 </Slider.Root>
  //               </div>
  //               <div>
  //                 <label className="block mb-2 text-sm text-white">
  //                   进度条: 75%
  //                 </label>
  //                 <Progress.Root className="relative w-full h-2 overflow-hidden bg-gray-600 rounded-full">
  //                   <Progress.Indicator
  //                     className="h-full transition-transform duration-300 ease-out bg-purple-600"
  //                     style={{ transform: `translateX(-${100 - 75}%)` }}
  //                   />
  //                 </Progress.Root>
  //               </div>
  //             </div>
  //           </div>

  //           {/* 选择器 */}
  //           <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
  //             <h3 className="mb-4 text-lg font-semibold text-white">
  //               Select 选择器
  //             </h3>
  //             <Select.Root value={selectValue} onValueChange={setSelectValue}>
  //               <Select.Trigger className="flex items-center justify-between w-full px-3 py-2 bg-white rounded">
  //                 <Select.Value />
  //                 <Select.Icon>
  //                   <ChevronDownIcon />
  //                 </Select.Icon>
  //               </Select.Trigger>
  //               <Select.Portal>
  //                 <Select.Content className="bg-white rounded-lg shadow-lg">
  //                   <Select.Viewport className="p-2">
  //                     <Select.Item
  //                       value="apple"
  //                       className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
  //                     >
  //                       <Select.ItemText>苹果</Select.ItemText>
  //                     </Select.Item>
  //                     <Select.Item
  //                       value="banana"
  //                       className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
  //                     >
  //                       <Select.ItemText>香蕉</Select.ItemText>
  //                     </Select.Item>
  //                     <Select.Item
  //                       value="orange"
  //                       className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
  //                     >
  //                       <Select.ItemText>橙子</Select.ItemText>
  //                     </Select.Item>
  //                   </Select.Viewport>
  //                 </Select.Content>
  //               </Select.Portal>
  //             </Select.Root>
  //           </div>

  //           {/* 标签页 */}
  //           <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm md:col-span-2">
  //             <h3 className="mb-4 text-lg font-semibold text-white">
  //               Tabs 标签页
  //             </h3>
  //             <Tabs.Root defaultValue="tab1">
  //               <Tabs.List className="flex p-1 rounded-lg bg-white/20">
  //                 <Tabs.Trigger
  //                   value="tab1"
  //                   className="flex-1 rounded px-3 py-2 text-white data-[state=active]:bg-purple-600"
  //                 >
  //                   账户
  //                 </Tabs.Trigger>
  //                 <Tabs.Trigger
  //                   value="tab2"
  //                   className="flex-1 rounded px-3 py-2 text-white data-[state=active]:bg-purple-600"
  //                 >
  //                   文档
  //                 </Tabs.Trigger>
  //                 <Tabs.Trigger
  //                   value="tab3"
  //                   className="flex-1 rounded px-3 py-2 text-white data-[state=active]:bg-purple-600"
  //                 >
  //                   设置
  //                 </Tabs.Trigger>
  //               </Tabs.List>
  //               <div className="mt-4">
  //                 <Tabs.Content value="tab1" className="text-white">
  //                   <p>管理你的账户设置和偏好。</p>
  //                 </Tabs.Content>
  //                 <Tabs.Content value="tab2" className="text-white">
  //                   <p>访问和管理你的文档。</p>
  //                 </Tabs.Content>
  //                 <Tabs.Content value="tab3" className="text-white">
  //                   <p>更新你的设置和配置。</p>
  //                 </Tabs.Content>
  //               </div>
  //             </Tabs.Root>
  //           </div>

  //           {/* 手风琴 */}
  //           <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm md:col-span-1">
  //             <h3 className="mb-4 text-lg font-semibold text-white">
  //               Accordion 手风琴
  //             </h3>
  //             <Accordion.Root type="single" collapsible>
  //               <Accordion.Item
  //                 value="item-1"
  //                 className="border-b border-white/20"
  //               >
  //                 <Accordion.Header>
  //                   <Accordion.Trigger className="flex items-center justify-between w-full py-3 text-left text-white hover:text-purple-300">
  //                     什么是 Radix UI？
  //                     <ChevronRightIcon className="transition-transform data-[state=open]:rotate-90" />
  //                   </Accordion.Trigger>
  //                 </Accordion.Header>
  //                 <Accordion.Content className="pb-3 text-white/80">
  //                   Radix UI 是一个低级 UI
  //                   原语库，用于构建高质量、可访问的设计系统和 Web 应用程序。
  //                 </Accordion.Content>
  //               </Accordion.Item>
  //               <Accordion.Item
  //                 value="item-2"
  //                 className="border-b border-white/20"
  //               >
  //                 <Accordion.Header>
  //                   <Accordion.Trigger className="flex items-center justify-between w-full py-3 text-left text-white hover:text-purple-300">
  //                     为什么选择 Radix UI？
  //                     <ChevronRightIcon className="transition-transform data-[state=open]:rotate-90" />
  //                   </Accordion.Trigger>
  //                 </Accordion.Header>
  //                 <Accordion.Content className="pb-3 text-white/80">
  //                   它提供了无样式、可访问、可组合的组件，让你完全控制外观和行为。
  //                 </Accordion.Content>
  //               </Accordion.Item>
  //             </Accordion.Root>
  //           </div>
  //         </div>

  //         {/* 返回按钮 */}
  //         <div className="mt-12 text-center">
  //           <a
  //             href="/"
  //             className="inline-block px-6 py-3 text-white bg-purple-600 rounded hover:bg-purple-700"
  //           >
  //             返回首页
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   );
}
