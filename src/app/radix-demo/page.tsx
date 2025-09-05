"use client";

import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Dialog,
  DropdownMenu,
  Flex,
  Grid,
  Heading,
  IconButton,
  Progress,
  RadioGroup,
  Select,
  Separator,
  Slider,
  Switch,
  TabNav,
  Text,
  TextField,
  Tooltip,
  Badge,
  Avatar,
  AlertDialog,
  Popover,
  HoverCard,
  ScrollArea,
  Tabs,
  Callout,
  Code,
  Em,
  Kbd,
  Link,
  Quote,
  Strong,
} from "@radix-ui/themes";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  GearIcon,
  ExitIcon,
  InfoCircledIcon,
  CheckIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import { useState } from "react";

export default function RadixDemoPage() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  const [selectValue, setSelectValue] = useState("apple");

  return (
    <Container size="4" p="4">
      <Box mb="6">
        <Heading size="8" mb="2">
          Radix UI Themes 完整组件展示
        </Heading>
        <Text size="4" color="gray">
          这里展示了 Radix UI Themes 提供的所有主要组件
        </Text>
      </Box>

      <Grid columns={{ initial: "1", md: "2" }} gap="6">
        {/* 基础组件 */}
        <Card>
          <Heading size="5" mb="4">
            基础组件
          </Heading>

          <Flex direction="column" gap="3">
            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                按钮
              </Text>
              <Flex gap="2" wrap="wrap">
                <Button>默认按钮</Button>
                <Button variant="soft">软按钮</Button>
                <Button variant="outline">轮廓按钮</Button>
                <Button variant="ghost">幽灵按钮</Button>
                <Button color="red">红色按钮</Button>
                <Button size="1">小按钮</Button>
                <Button size="3">大按钮</Button>
              </Flex>
            </Box>

            <Separator />

            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                文本和排版
              </Text>
              <Flex direction="column" gap="2">
                <Text>普通文本</Text>
                <Text weight="bold">粗体文本</Text>
                <Em>斜体文本</Em>
                <Strong>强调文本</Strong>
                <Code>代码文本</Code>
                <Kbd>Ctrl + C</Kbd>
                <Link href="#">链接文本</Link>
                <Quote>这是一个引用文本</Quote>
              </Flex>
            </Box>

            <Separator />

            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                徽章和头像
              </Text>
              <Flex gap="2" align="center">
                <Badge>默认</Badge>
                <Badge color="red">错误</Badge>
                <Badge color="green">成功</Badge>
                <Badge variant="soft">软徽章</Badge>
                <Avatar
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                  fallback="A"
                />
                <Avatar fallback="B" />
              </Flex>
            </Box>
          </Flex>
        </Card>

        {/* 表单组件 */}
        <Card>
          <Heading size="5" mb="4">
            表单组件
          </Heading>

          <Flex direction="column" gap="4">
            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                输入框
              </Text>
              <Flex direction="column" gap="2">
                <TextField.Root placeholder="搜索...">
                  <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                  </TextField.Slot>
                </TextField.Root>
                <TextField.Root placeholder="带后缀的输入框">
                  <TextField.Slot side="right">
                    <IconButton size="1" variant="ghost">
                      <Cross2Icon height="14" width="14" />
                    </IconButton>
                  </TextField.Slot>
                </TextField.Root>
              </Flex>
            </Box>

            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                选择器
              </Text>
              <Select.Root value={selectValue} onValueChange={setSelectValue}>
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="apple">苹果</Select.Item>
                  <Select.Item value="banana">香蕉</Select.Item>
                  <Select.Item value="orange">橙子</Select.Item>
                </Select.Content>
              </Select.Root>
            </Box>

            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                复选框和开关
              </Text>
              <Flex direction="column" gap="2">
                <Flex align="center" gap="2">
                  <Checkbox
                    checked={checkboxChecked}
                    onCheckedChange={setCheckboxChecked}
                  />
                  <Text>复选框选项</Text>
                </Flex>
                <Flex align="center" gap="2">
                  <Switch
                    checked={switchChecked}
                    onCheckedChange={setSwitchChecked}
                  />
                  <Text>开关选项</Text>
                </Flex>
              </Flex>
            </Box>

            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                单选按钮组
              </Text>
              <RadioGroup.Root value={radioValue} onValueChange={setRadioValue}>
                <Flex direction="column" gap="2">
                  <Text as="label" size="2">
                    <Flex gap="2">
                      <RadioGroup.Item value="1" />
                      选项 1
                    </Flex>
                  </Text>
                  <Text as="label" size="2">
                    <Flex gap="2">
                      <RadioGroup.Item value="2" />
                      选项 2
                    </Flex>
                  </Text>
                  <Text as="label" size="2">
                    <Flex gap="2">
                      <RadioGroup.Item value="3" />
                      选项 3
                    </Flex>
                  </Text>
                </Flex>
              </RadioGroup.Root>
            </Box>

            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                滑块
              </Text>
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                max={100}
                step={1}
              />
              <Text size="1" color="gray">
                当前值: {sliderValue[0]}
              </Text>
            </Box>
          </Flex>
        </Card>

        {/* 交互组件 */}
        <Card>
          <Heading size="5" mb="4">
            交互组件
          </Heading>

          <Flex direction="column" gap="4">
            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                对话框
              </Text>
              <Dialog.Root>
                <Dialog.Trigger>
                  <Button>打开对话框</Button>
                </Dialog.Trigger>
                <Dialog.Content maxWidth="450px">
                  <Dialog.Title>编辑个人资料</Dialog.Title>
                  <Dialog.Description size="2" mb="4">
                    更新你的个人信息。
                  </Dialog.Description>

                  <Flex direction="column" gap="3">
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        姓名
                      </Text>
                      <TextField.Root defaultValue="张三" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        邮箱
                      </Text>
                      <TextField.Root defaultValue="zhangsan@example.com" />
                    </label>
                  </Flex>

                  <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                      <Button variant="soft" color="gray">
                        取消
                      </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button>保存</Button>
                    </Dialog.Close>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
            </Box>

            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                警告对话框
              </Text>
              <AlertDialog.Root>
                <AlertDialog.Trigger>
                  <Button color="red">删除账户</Button>
                </AlertDialog.Trigger>
                <AlertDialog.Content maxWidth="450px">
                  <AlertDialog.Title>确认删除</AlertDialog.Title>
                  <AlertDialog.Description size="2">
                    你确定要删除你的账户吗？此操作无法撤销。
                  </AlertDialog.Description>

                  <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                      <Button variant="soft" color="gray">
                        取消
                      </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                      <Button variant="solid" color="red">
                        删除账户
                      </Button>
                    </AlertDialog.Action>
                  </Flex>
                </AlertDialog.Content>
              </AlertDialog.Root>
            </Box>

            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                下拉菜单
              </Text>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="soft">
                    选项
                    <ChevronDownIcon />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item>
                    <PersonIcon />
                    个人资料
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <GearIcon />
                    设置
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item color="red">
                    <ExitIcon />
                    退出登录
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </Box>

            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                工具提示
              </Text>
              <Tooltip content="这是一个工具提示">
                <Button variant="outline">悬停查看提示</Button>
              </Tooltip>
            </Box>

            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                弹出框
              </Text>
              <Popover.Root>
                <Popover.Trigger>
                  <Button variant="soft">打开弹出框</Button>
                </Popover.Trigger>
                <Popover.Content width="300px">
                  <Flex gap="3">
                    <Avatar
                      size="3"
                      src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                      fallback="A"
                    />
                    <Box grow="1">
                      <Text as="div" size="3" weight="bold">
                        Vlad Moroz
                      </Text>
                      <Text as="div" size="2" color="gray">
                        @vladmoroz
                      </Text>
                      <Text as="div" size="2" mt="3">
                        产品设计师，专注于用户体验和界面设计。
                      </Text>
                    </Box>
                  </Flex>
                </Popover.Content>
              </Popover.Root>
            </Box>

            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                悬停卡片
              </Text>
              <HoverCard.Root>
                <HoverCard.Trigger>
                  <Link href="#" underline="always">
                    @radix_ui
                  </Link>
                </HoverCard.Trigger>
                <HoverCard.Content maxWidth="300px">
                  <Flex gap="2">
                    <Avatar size="3" fallback="R" />
                    <Box>
                      <Heading size="3" as="h3">
                        Radix
                      </Heading>
                      <Text as="div" size="2" color="gray">
                        @radix_ui
                      </Text>
                      <Text as="div" size="2" mt="3">
                        低级 UI 原语，用于构建高质量、可访问的设计系统和 Web
                        应用程序。
                      </Text>
                    </Box>
                  </Flex>
                </HoverCard.Content>
              </HoverCard.Root>
            </Box>
          </Flex>
        </Card>

        {/* 布局和显示组件 */}
        <Card>
          <Heading size="5" mb="4">
            布局和显示组件
          </Heading>

          <Flex direction="column" gap="4">
            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                进度条
              </Text>
              <Progress value={65} />
            </Box>

            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                标签页
              </Text>
              <Tabs.Root defaultValue="account">
                <Tabs.List>
                  <Tabs.Trigger value="account">账户</Tabs.Trigger>
                  <Tabs.Trigger value="documents">文档</Tabs.Trigger>
                  <Tabs.Trigger value="settings">设置</Tabs.Trigger>
                </Tabs.List>
                <Box pt="3">
                  <Tabs.Content value="account">
                    <Text size="2">管理你的账户设置和偏好。</Text>
                  </Tabs.Content>
                  <Tabs.Content value="documents">
                    <Text size="2">访问和管理你的文档。</Text>
                  </Tabs.Content>
                  <Tabs.Content value="settings">
                    <Text size="2">更新你的设置和配置。</Text>
                  </Tabs.Content>
                </Box>
              </Tabs.Root>
            </Box>

            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                滚动区域
              </Text>
              <ScrollArea
                type="always"
                scrollbars="vertical"
                style={{ height: 180 }}
              >
                <Box p="2" pr="8">
                  <Heading size="4" mb="2" trim="start">
                    原则
                  </Heading>
                  <Flex direction="column" gap="4">
                    <Text size="2">
                      <Strong>可访问性优先</Strong>. 组件遵循 WAI-ARIA
                      设计模式， 在可能的情况下提供完整的键盘导航支持。
                    </Text>
                    <Text size="2">
                      <Strong>无样式</Strong>.
                      组件提供零样式，让你完全控制外观。
                    </Text>
                    <Text size="2">
                      <Strong>可组合</Strong>. 组件被分解为更小的部分，
                      具有最小的 API 表面，为高级定制提供灵活性。
                    </Text>
                    <Text size="2">
                      <Strong>一致性</Strong>. 组件共享类似的 API，
                      创建一致的开发体验。
                    </Text>
                    <Text size="2">
                      <Strong>开发者体验</Strong>. 组件提供直观的 API，
                      具有周到的默认值和灵活的定制选项。
                    </Text>
                  </Flex>
                </Box>
              </ScrollArea>
            </Box>

            <Box>
              <Text size="2" weight="bold" mb="2" as="div">
                标注
              </Text>
              <Callout.Root>
                <Callout.Icon>
                  <InfoCircledIcon />
                </Callout.Icon>
                <Callout.Text>
                  你需要更新你的付款方式才能继续使用我们的服务。
                </Callout.Text>
              </Callout.Root>
            </Box>
          </Flex>
        </Card>
      </Grid>

      <Box mt="8">
        <Flex justify="center">
          <Button asChild>
            <a href="/">返回首页</a>
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}
